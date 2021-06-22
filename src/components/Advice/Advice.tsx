import React from 'react'

interface AdviceProps {
    advice: string,
}

const Advice: React.FC<AdviceProps> = (props: AdviceProps) => {
    const { advice } = props;
    return (
        <div className="text-3xl">
            {advice}
        </div>
    )
}

export default Advice;
