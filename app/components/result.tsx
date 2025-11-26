
export function Result(props: { result: string }) {
    return (
        <div className="alert alert-primary" role="alert">
            You voted {props.result}
        </div>
    );
}