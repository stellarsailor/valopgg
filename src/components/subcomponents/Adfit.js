// import React, { useEffect } from 'react';


// export function Adfit() { 
    
//     // useEffect(() => {
//     //     window.ba = window.ba || []
//     //     window.ba.min.push({});
//     // },[])

//     useEffect(() => {
//         console.log('asddassa')
//     })

//     if(window.innerWidth < 576){
//         return (<></>)
//     } else {
//         return (
//             <div key={Math.random()}>
//                 <ins className="kakao_ad_area" 
//                 key={Math.random()}
//                 style={{display: 'none'}}
//                 data-ad-unit    = "DAN-qe74ylevqulf" 
//                 data-ad-width   = "728" 
//                 data-ad-height  = "90"></ins> 
//             </div>
//         )
//     }
// }


import React from 'react';
import loadScript from '../../logics/load-script';

export default class Adfit extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    componentWillMount() {
        window.adfit || loadScript('https://t1.daumcdn.net/kas/static/ba.min.js', function(){})
        console.log('loadingScript')

    }

    componentDidMount() {
        // console.log(document.getElementById('daumAd'))
        // window.adfit.render()
        console.log('rendered')
    }

    componentWillUnmount() {
        window.adfit.destroy(this.props.adUnit)
        console.log('destroy')
    }

    render() {
        return (
            <div key={Math.random()}>
                <ins className={'kakao_ad_area'}
                    style={{
                        display: 'block',
                        width: '100%'
                    }}
                    data-ad-unit={this.props.adUnit}
                    data-ad-width={this.props.adWidth}
                    data-ad-height={this.props.adHeight}
                    data-ad-test={this.props.adTest || 'N'}
                    data-ad-param-channel={this.props.adParamChannel}
                    data-ad-param-cp={this.props.adParamCp}
                    >
                </ins>
            </div>
            )
    }
}