interface PlantImage {
  id: string;
  imageData: string;
  timestamp: Date;
  plotId: string;
}

interface MLModelResponse {
  confidence: number;
  predictions: {
    healthy: number;
    disease: number;
    pest: number;
  };
  detectedIssues: string[];
  recommendedAction: 'none' | 'monitor' | 'spray_mild' | 'spray_intensive';
  treatmentPriority: 'low' | 'medium' | 'high' | 'critical';
}

interface ProcessingStatus {
  status: 'processing' | 'completed' | 'error';
  progress: number;
  estimatedTime?: number;
}

export class MLModelIntegration {
  private apiEndpoint: string;
  private apiKey: string;
  private processingQueue: Map<string, ProcessingStatus> = new Map();

  constructor(apiEndpoint?: string, apiKey?: string) {
    this.apiEndpoint = apiEndpoint || process.env.ML_MODEL_ENDPOINT || 'http://localhost:8000/api/analyze';
    this.apiKey = apiKey || process.env.ML_MODEL_API_KEY || 'your-api-key';
  }

  async analyzeImage(image: PlantImage): Promise<MLModelResponse> {
    try {
      this.updateProcessingStatus(image.id, { status: 'processing', progress: 0 });

      const formData = new FormData();
      formData.append('image', this.base64ToBlob(image.imageData));
      formData.append('plot_id', image.plotId);
      formData.append('timestamp', image.timestamp.toISOString());

      this.updateProcessingStatus(image.id, { status: 'processing', progress: 25 });

      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: formData,
      });

      this.updateProcessingStatus(image.id, { status: 'processing', progress: 75 });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      this.updateProcessingStatus(image.id, { status: 'completed', progress: 100 });
      
      return this.mapResponseToMLModelResponse(result);
    } catch (error) {
      this.updateProcessingStatus(image.id, { status: 'error', progress: 0 });
      console.error('ML Model Analysis Error:', error);
      
      return this.getFallbackResponse(image);
    }
  }

  async batchAnalyzeImages(images: PlantImage[]): Promise<Map<string, MLModelResponse>> {
    const results = new Map<string, MLModelResponse>();
    
    const analysisPromises = images.map(async (image) => {
      const result = await this.analyzeImage(image);
      results.set(image.id, result);
      return result;
    });

    await Promise.all(analysisPromises);
    return results;
  }

  getProcessingStatus(imageId: string): ProcessingStatus | null {
    return this.processingQueue.get(imageId) || null;
  }

  private updateProcessingStatus(imageId: string, status: ProcessingStatus): void {
    this.processingQueue.set(imageId, status);
    
    if (status.status === 'completed' || status.status === 'error') {
      setTimeout(() => {
        this.processingQueue.delete(imageId);
      }, 30000);
    }
  }

  private base64ToBlob(base64Data: string): Blob {
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/jpeg' });
  }

  private mapResponseToMLModelResponse(apiResponse: any): MLModelResponse {
    return {
      confidence: apiResponse.confidence || 0.85,
      predictions: {
        healthy: apiResponse.predictions?.healthy || 0.7,
        disease: apiResponse.predictions?.disease || 0.2,
        pest: apiResponse.predictions?.pest || 0.1,
      },
      detectedIssues: apiResponse.detected_issues || [],
      recommendedAction: apiResponse.recommended_action || 'monitor',
      treatmentPriority: apiResponse.treatment_priority || 'medium',
    };
  }

  private getFallbackResponse(image: PlantImage): MLModelResponse {
    console.warn(`Using fallback response for image ${image.id}`);
    
    return {
      confidence: 0.0,
      predictions: {
        healthy: 0.5,
        disease: 0.3,
        pest: 0.2,
      },
      detectedIssues: ['Unable to analyze - using offline mode'],
      recommendedAction: 'monitor',
      treatmentPriority: 'medium',
    };
  }

  validateModelEndpoint(): Promise<boolean> {
    return fetch(this.apiEndpoint.replace('/analyze', '/health'))
      .then(response => response.ok)
      .catch(() => false);
  }

  updateModelConfiguration(config: {
    confidence_threshold?: number;
    detection_sensitivity?: 'low' | 'medium' | 'high';
    enable_pest_detection?: boolean;
    enable_disease_detection?: boolean;
  }): Promise<boolean> {
    return fetch(this.apiEndpoint.replace('/analyze', '/config'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(config),
    })
      .then(response => response.ok)
      .catch(() => false);
  }
}

export const mlModelService = new MLModelIntegration();