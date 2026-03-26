import Slider from "antd/es/slider"
import type { SliderSingleProps } from "antd"

export const ProgressBar = ({value,title }:{value: number,title: string}) => {
    const styles: SliderSingleProps['styles'] = {
        track: { backgroundImage: 'linear-gradient(180deg, #f97316,#FF7B00)' },
        handle: {borderColor: '#FFB76B', boxShadow: '0 2px 8px #276221' },
    }


    return (
        <div className="mb-10">
            <h1 className="text-2xs font-bold">
                {title}
            </h1>
            <Slider 
                value={value} 
                disabled
                tooltip={{open:false}}
                styles={styles}
            />
        </div>
    )
}