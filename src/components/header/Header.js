
function Header () {
    return (
        <header>
            <div className="container-header">
                <img src="public/LOGO.png" alt="Logo da minha empresa"/>
                <select name="O HOSPITAL">
                    <option>Pronto Socorro</option>
                    <option>Horários e Visitas</option>
                    <option>História</option>
                    <option>Corpo clínico</option>
                </select>
                <select name="SERVIÇOS">
                    <option>Exames laboratoriais</option>
                    <option>Exames de imagem</option>
                    <option>Exames diagnósticos</option>
                    <option>Cirurgias</option>
                </select>
                <p>PLANO DE SAÚDE</p>
                <p>CENTRO DE PESQUISA</p>
                <select name="TRABALHE CONOSCO">
                    <option>Vagas</option>
                    <option>Cadastro médico</option>
                </select>
                <select name="CONTATO">
                    <option>Contato</option>
                    <option>Proteção de dados pessoais</option>
                </select>
            </div>
        </header>
    )
}

export default Header