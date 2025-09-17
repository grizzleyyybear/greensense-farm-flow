interface AIModelResult {
  status: 'healthy' | 'mild' | 'severe';
  reason: string;
  healthScore: number;
}

const healthyReasons = [
  'Optimal leaf color and structure detected',
  'No signs of disease or pest damage',
  'Excellent growth patterns observed',
  'Strong root system development',
  'Optimal nutrient uptake indicators'
];

const mildReasons = [
  'Minor leaf discoloration detected',
  'Early stage pest activity observed',
  'Slight moisture stress indicators',
  'Minor nutrient deficiency signs',
  'Small fungal spots identified'
];

const severeReasons = [
  'Significant leaf damage from pests',
  'Advanced fungal infection spread',
  'Severe drought stress symptoms',
  'Critical nutrient deficiency detected',
  'Multiple pest species infestation'
];

export const mockAIModel = (plotId: string, randomFactor: number): AIModelResult => {
  const plotSeed = plotId.charCodeAt(0);
  const combinedSeed = plotSeed + Math.floor(randomFactor * 100);
  
  let status: 'healthy' | 'mild' | 'severe';
  let healthScore: number;
  let reasons: string[];

  if (combinedSeed % 3 === 0) {
    status = 'healthy';
    healthScore = 85 + Math.floor(randomFactor * 15);
    reasons = healthyReasons;
  } else if (combinedSeed % 3 === 1) {
    status = 'mild';
    healthScore = 60 + Math.floor(randomFactor * 25);
    reasons = mildReasons;
  } else {
    status = 'severe';
    healthScore = 20 + Math.floor(randomFactor * 40);
    reasons = severeReasons;
  }

  const reason = reasons[Math.floor(randomFactor * reasons.length)];

  return {
    status,
    reason,
    healthScore
  };
};