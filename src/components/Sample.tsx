import Child from "./Child";

const Sample = (props: any) => {
    return (
        <>
            <span className="text-orange-500 underline text-xl">{props.msg}</span><br />
            {/* <Child secondmsg={props.secondmsg} setSecondMsg={props.setSecondMsg} /> */}
        </>
    )
}

export default Sample;