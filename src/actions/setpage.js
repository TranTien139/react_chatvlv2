/**
 * Created by Tien on 11/22/2017.
 */

function setpage(page){
    return function(dispatch){
        console.log(page);
        dispatch({type:'SET_PAGE',payload:page});
    }
}

module.exports.setpage = setpage;
