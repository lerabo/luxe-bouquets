import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:3000/api/graphql`,
  documents: 'src/**/*.gql.ts',
  generates: {
    'src/app/graphql/generated/index.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: { skipTypename: true },
    },
  },
}
export default config
