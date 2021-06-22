import React from 'react'

interface AdviceProps {
    advice: string,
}

const Advice: React.FC<AdviceProps> = (props: AdviceProps) => {
    const { advice } = props;
    return (
        <div>
            {advice}
        </div>
    )
}

export default Advice;
