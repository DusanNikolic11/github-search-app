const Footer = () => {
  const footerDate = new Date().getFullYear()
  return (
    <footer className='footer-center'>
      <div><p>&copy; {footerDate} made by @wollr</p></div>
    </footer>
  )
}
export default Footer