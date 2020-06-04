import { strat } from '../datas/strat'
import { agent } from '../datas/agent'

export default function numberOfStrats(selectedAgentId) {
    return (
        strat[agent[selectedAgentId].name.toLowerCase()].bind.length + 
        strat[agent[selectedAgentId].name.toLowerCase()].haven.length + 
        strat[agent[selectedAgentId].name.toLowerCase()].split.length + 
        strat[agent[selectedAgentId].name.toLowerCase()].ascent.length
    )
}