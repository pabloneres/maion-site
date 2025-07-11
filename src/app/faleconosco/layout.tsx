import React from "react"
import Header from "../../components/header"

type ILayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <main>
            <Header />
            {children}
            {/* <footer className="container-view">
                <span>
                    2024 © Todos os Direitos Reservados | Desenvolvido com <Image className="heart-icon" src={require("@/public/images/heart.png")} alt="Heart" /> por <a href="https://plugue.me"><Image src={require("@/public/images/plugueme.png")} alt="Plugueme" /> </a>
                </span>
            </footer> */}
        </main>
    )
}