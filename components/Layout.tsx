import TopNavBar from './TopNavBar'

const layoutStyle: any = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
}

const contentStyle: any = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
}

const Layout: any = (props: any) => {
  return (
    <div className="Layout" style={layoutStyle}>
      <TopNavBar />
      <div className="Content" style={contentStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout