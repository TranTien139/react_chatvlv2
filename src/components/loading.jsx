import React from 'react';

class Loading extends React.Component{
    render(){
        return(
            <div className="main-item">
                <div className="text-center">
                    <img src="/icon/loading_spinner.gif" />
                </div>
            </div>
        );
    }
}
export default Loading;