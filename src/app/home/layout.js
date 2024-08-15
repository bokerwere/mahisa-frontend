import HomeNavbar from "@/components/Navbar/HomeNavbar";
import HomeFooter from "@/components/Footer/HomeFooter";

export default function HomeLayout({ children }) {
  return (
      <>
          <HomeNavbar />
          {children}
          <HomeFooter />
      </>
  )
}
