function Header() {
    return (
        <div data-name="header" className="police-gradient p-4 shadow-lg">
            <div className="container mx-auto flex items-center">
                <img 
                    data-name="police-logo"
                    src="https://placehold.co/40x40" 
                    alt="Polícia Logo" 
                    className="w-10 h-10 mr-3"
                />
                <div data-name="header-text">
                    <h1 className="text-xl font-bold">Sistema de Orientação Policial</h1>
                    <p className="text-sm opacity-75">Assistente Virtual de Atendimento</p>
                </div>
            </div>
        </div>
    );
}
