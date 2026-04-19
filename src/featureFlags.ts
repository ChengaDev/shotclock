const featureFlags = {
  reactionTraining: process.env.REACT_APP_TRAINING_ENABLED === 'true',
  youtube: true,
}

export default featureFlags
