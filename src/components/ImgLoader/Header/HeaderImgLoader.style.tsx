import styled from "styled-components";

export const ContentHeader = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #F5F7F7;
    border-radius: 5px;
    padding: 15px 0px;
   

`
export const ContentHeaderInfo = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3px   ;
    padding-left: 15px;

    h2{
        font-size: 20px;
       
    }
    p{
        font-size: 14px;
    }

`

export const ContentHeaderActions = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 4px  20px;
    background-color: #FFFFFF;
    border-radius: 30px 0px 0px 30px;

    .icon{
        margin-top: 5px;
        cursor: pointer;
    }


`