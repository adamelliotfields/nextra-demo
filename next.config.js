import nextra from 'nextra'

const { NODE_ENV } = process?.env ?? {}

const withNextra = nextra({
  latex: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  basePath: NODE_ENV === 'production' ? '/nextra-demo' : ''
})
