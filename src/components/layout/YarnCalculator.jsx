import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const YarnCalculator = () => {
  const [formData, setFormData] = useState({
    garmentType: 'sweater',
    size: 'medium',
    patternComplexity: 'medium',
    yarnWeight: 'worsted'
  });

  const [calculationResult, setCalculationResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Yarn requirement estimates (in grams) based on garment type, size, and yarn weight
  const yarnRequirements = {
    sweater: {
      small: { lace: 550, fingering: 650, sport: 750, dk: 850, worsted: 950, bulky: 1050, super_bulky: 1150 },
      medium: { lace: 650, fingering: 750, sport: 850, dk: 950, worsted: 1050, bulky: 1150, super_bulky: 1250 },
      large: { lace: 750, fingering: 850, sport: 950, dk: 1050, worsted: 1150, bulky: 1250, super_bulky: 1350 },
      xlarge: { lace: 850, fingering: 950, sport: 1050, dk: 1150, worsted: 1250, bulky: 1350, super_bulky: 1450 }
    },
    cardigan: {
      small: { lace: 600, fingering: 700, sport: 800, dk: 900, worsted: 1000, bulky: 1100, super_bulky: 1200 },
      medium: { lace: 700, fingering: 800, sport: 900, dk: 1000, worsted: 1100, bulky: 1200, super_bulky: 1300 },
      large: { lace: 800, fingering: 900, sport: 1000, dk: 1100, worsted: 1200, bulky: 1300, super_bulky: 1400 },
      xlarge: { lace: 900, fingering: 1000, sport: 1100, dk: 1200, worsted: 1300, bulky: 1400, super_bulky: 1500 }
    },
    scarf: {
      small: { lace: 150, fingering: 200, sport: 250, dk: 300, worsted: 350, bulky: 400, super_bulky: 450 },
      medium: { lace: 200, fingering: 250, sport: 300, dk: 350, worsted: 400, bulky: 450, super_bulky: 500 },
      large: { lace: 250, fingering: 300, sport: 350, dk: 400, worsted: 450, bulky: 500, super_bulky: 550 },
      xlarge: { lace: 300, fingering: 350, sport: 400, dk: 450, worsted: 500, bulky: 550, super_bulky: 600 }
    },
    hat: {
      small: { lace: 75, fingering: 100, sport: 125, dk: 150, worsted: 175, bulky: 200, super_bulky: 225 },
      medium: { lace: 100, fingering: 125, sport: 150, dk: 175, worsted: 200, bulky: 225, super_bulky: 250 },
      large: { lace: 125, fingering: 150, sport: 175, dk: 200, worsted: 225, bulky: 250, super_bulky: 275 },
      xlarge: { lace: 150, fingering: 175, sport: 200, dk: 225, worsted: 250, bulky: 275, super_bulky: 300 }
    },
    socks: {
      small: { lace: 75, fingering: 100, sport: 125, dk: 150, worsted: 175, bulky: 200, super_bulky: 225 },
      medium: { lace: 100, fingering: 125, sport: 150, dk: 175, worsted: 200, bulky: 225, super_bulky: 250 },
      large: { lace: 125, fingering: 150, sport: 175, dk: 200, worsted: 225, bulky: 250, super_bulky: 275 },
      xlarge: { lace: 150, fingering: 175, sport: 200, dk: 225, worsted: 250, bulky: 275, super_bulky: 300 }
    }
  };

  // Complexity multipliers
  const complexityMultipliers = {
    simple: 0.9,
    medium: 1.0,
    complex: 1.2
  };

  // Nice readable labels for the values
  const readableLabels = {
    garmentType: {
      sweater: "Sweater/Pullover",
      cardigan: "Cardigan",
      scarf: "Scarf/Shawl",
      hat: "Hat/Beanie",
      socks: "Socks"
    },
    size: {
      small: "Small",
      medium: "Medium",
      large: "Large",
      xlarge: "X-Large"
    },
    patternComplexity: {
      simple: "Simple (stockinette, basic rib)",
      medium: "Medium (cables, basic colorwork)",
      complex: "Complex (intricate colorwork, lace)"
    },
    yarnWeight: {
      lace: "Lace (2-ply)",
      fingering: "Fingering (4-ply)",
      sport: "Sport (5-ply)",
      dk: "DK (8-ply)",
      worsted: "Worsted (10-ply)",
      bulky: "Bulky (12-ply)",
      super_bulky: "Super Bulky (14+ ply)"
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateYarnNeeded = () => {
    setIsCalculating(true);

    // Simulate a short delay for calculation effect
    setTimeout(() => {
      const { garmentType, size, patternComplexity, yarnWeight } = formData;

      // Get base yarn amount from the chart
      const baseAmount = yarnRequirements[garmentType][size][yarnWeight];

      // Apply complexity multiplier
      const adjustedAmount = Math.round(baseAmount * complexityMultipliers[patternComplexity]);

      // Estimate number of balls (assuming standard 50g balls)
      const ballsNeeded = Math.ceil(adjustedAmount / 50);

      // Calculate approximate cost (£12-25 per ball depending on weight)
      const costPerBall = {
        lace: 12,
        fingering: 14,
        sport: 16,
        dk: 18,
        worsted: 20,
        bulky: 22,
        super_bulky: 25
      };

      const estimatedCost = ballsNeeded * costPerBall[yarnWeight];

      setCalculationResult({
        yarnAmount: adjustedAmount,
        ballsNeeded: ballsNeeded,
        estimatedCost: estimatedCost
      });

      setIsCalculating(false);
    }, 1000);
  };

  const resetCalculation = () => {
    setCalculationResult(null);
    setFormData({
      garmentType: 'sweater',
      size: 'medium',
      patternComplexity: 'medium',
      yarnWeight: 'worsted'
    });
  };

  return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-pink-500" />
          <h3 className="text-2xl font-light text-center">Yarn Calculator</h3>
        </div>

        {!calculationResult ? (
            <form onSubmit={(e) => { e.preventDefault(); calculateYarnNeeded(); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Garment Type</label>
                <select
                    name="garmentType"
                    value={formData.garmentType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                >
                  {Object.entries(readableLabels.garmentType).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                >
                  {Object.entries(readableLabels.size).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pattern Complexity</label>
                <select
                    name="patternComplexity"
                    value={formData.patternComplexity}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                >
                  {Object.entries(readableLabels.patternComplexity).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Yarn Weight</label>
                <select
                    name="yarnWeight"
                    value={formData.yarnWeight}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                >
                  {Object.entries(readableLabels.yarnWeight).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 px-4 rounded hover:bg-pink-600 transition-colors"
                    disabled={isCalculating}
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Yarn Needed'}
                </button>
              </div>
            </form>
        ) : (
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-light text-center mb-4">Your Estimate</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Yarn Amount</p>
                    <p className="text-2xl font-light text-pink-600">{calculationResult.yarnAmount}g</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Balls Needed (50g)</p>
                    <p className="text-2xl font-light text-pink-600">{calculationResult.ballsNeeded}</p>
                  </div>

                  <div className="text-center col-span-2">
                    <p className="text-sm text-gray-500">Estimated Cost</p>
                    <p className="text-2xl font-light text-pink-600">£{calculationResult.estimatedCost}</p>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>This is an approximate estimate. Actual yarn requirements may vary based on individual tension, specific pattern, and other factors.</p>
              </div>

              <button
                  onClick={resetCalculation}
                  className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Calculate Another
              </button>
            </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Need help choosing your yarn? <a href="mailto:knit@knitster-ldn.com" className="text-pink-500 hover:underline">Contact us</a> for personalized advice.</p>
        </div>
      </div>
  );
};

export default YarnCalculator;