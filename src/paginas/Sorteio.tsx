import { useState } from "react"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"

const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoScreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (<section>
        <form onSubmit={sortear}>
            <select
                required
                name="participanteDavez"
                id="participanteDavez"
                placeholder="Selecione o seu nome"
                value={participanteDaVez}
                onChange={evento => setParticipanteDaVez(evento.target.value)}
            >
                {participantes.map(participante => <option key={participante}>{participante}</option>)}
            </select>
            <button>Sortear</button>            
        </form>
        {amigoScreto && <p role="alert">{amigoScreto}</p>}
    </section>)
}

export default Sorteio