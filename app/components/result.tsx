import {Card, CardHeader, CardBody} from "@heroui/card";

export function Result(props: { result: string }) {
    return (
        <div >
            <Card>
                <CardHeader>You voted</CardHeader>
                <CardBody>{props.result}</CardBody>
            </Card>
        </div>
    );
}