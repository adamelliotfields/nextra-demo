import { BracesIcon } from 'lucide-react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="canonical" href="https://aef.me/nextra-demo/" />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#000" />
    </>
  ),
  logo: (props) => (
    <div className="flex items-center space-x-2">
      <BracesIcon className="w-5 h-5" />
      <span className="font-mono font-semibold tracking-wide text-base" {...props}>
        Nextra <em>Demo</em>
      </span>
    </div>
  ),
  main: (props) => (
    <>
      <div
        id="root"
        className="min-h-[calc(100%_-_60px)] md:min-h-[calc(100%_-_44px)] md:mt-3 md:px-6 md:pt-3 md:border md:border-neutral-200 md:rounded-md dark:md:border-neutral-800"
        {...props}
      />
      <footer className="p-5 text-center">
        <span className="text-sm text-neutral-400 dark:text-neutral-500">
          MIT&nbsp;&copy;&nbsp;{new Date().getFullYear()}
        </span>
      </footer>
    </>
  ),
  sidebar: {
    toggleButton: true,
    titleComponent: ({ title, type, route, ...rest }) => (
      <span className="text-base font-medium tracking-wide md:text-sm" {...rest}>
        {title}
      </span>
    )
  },
  project: {
    link: 'https://github.com/adamelliotfields/nextra-demo'
  },
  editLink: { component: null },
  feedback: { content: null },
  footer: { component: null },
  search: { placeholder: 'Search...' }
  // also apply `hidden` on `nextra-toc` in globals.css to remove extra spacing
  // toc: { component: null }
}

export default config
