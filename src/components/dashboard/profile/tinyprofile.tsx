import { Card, CardContent } from "@/components/ui/card";
import { AvatarDemo } from "../avatar";

const TinyProfile = () => {
    return ( 
        <Card>
            <CardContent  className="flex items-center pt-2 pb-2 space-x-2 rounded-mdr">
                <div className="">
                    <AvatarDemo />
                </div>
                <div className="">
                    <p className="text-sm font-medium">
                        Mugenhub
                    </p>
                    <p className="text-sm text-muted-foreground">
                    hello@mugenhub.io
                    </p>
                </div>
                
            </CardContent>
        </Card>
     );
}
 
export default TinyProfile;