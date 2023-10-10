import React from 'react';

const Display = (props) => {

    const {message, messageList} = props;

    return (
        <>
            <div className="listContentMain">
            <h2 className="text-white self-start pl-[10%] text-3xl">Things to do:</h2>
            <table className="todoListTable">
                <tbody>

                    {
                        messageList.map((item, i) => {
                            return (
                                <div>
                                    <td><input type="checkbox"/></td>
                                    <td className="text-white">{item}</td>
                                </div>
                            )
                        })
                    }

                </tbody>
                </table>
            </div>
        </>
    );
};

export default Display;