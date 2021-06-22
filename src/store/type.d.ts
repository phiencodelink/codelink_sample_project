interface Slip {
    id: number,
    advice: string,
}

interface AdviceInterface {
    slip: Slip 
}

type AdviceState = {
    advices: Slip[],
    status: any,
    error: string | null,
}


interface AdviceAction {
    type: string,
    payload: any,
}
