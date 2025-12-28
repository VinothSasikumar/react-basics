const Child = (props: any) => {

    const onChangeClick = () => {
        props.setSecondMsg('Second Message Updated');
    }

    return (
        <>
            <span className="text-orange-500 underline text-xl">{props.secondmsg}</span>
            <button onClick={onChangeClick}>Update Second Message</button>
        </>
    )
}

export default Child;