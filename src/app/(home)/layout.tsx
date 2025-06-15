import Navbar from './navbar'
interface LayoutProps {
  children?: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}

export default layout
