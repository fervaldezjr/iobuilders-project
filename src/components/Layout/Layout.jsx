import { GeneralContainer, MaxWidth } from "./Layout.styles";

const Layout = ({children}) => {
    return (
        <GeneralContainer>
            <MaxWidth>
                {children}
            </MaxWidth>
        </GeneralContainer>
    )
}

export default Layout;