const { NODE_ENV } = process?.env ?? {}

export const BASE_PATH = NODE_ENV === 'production' ? '/nextra-demo' : ''
