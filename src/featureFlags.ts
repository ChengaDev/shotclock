const featureFlags = {
  reactionTraining: process.env.REACT_APP_TRAINING_ENABLED === 'true',
  youtube: process.env.REACT_APP_YOUTUBE_ENABLED === 'true',
}

export default featureFlags
