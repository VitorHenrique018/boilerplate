type Props = {
  title: string
}

const foo = 'bla'

export default function Home({ title = 'REACT Teste' }: Props) {
  return <div>{title}</div>
}
