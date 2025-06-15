import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
const page = () => {
  return (
    <div className="flex flex-col gap-y-4 ">
      <div>
       <Button variant="elevated">i am a button</Button>
      </div>
      <div>
        <Input placeholder="I am an input"/>
      </div>
      <div>
        <Progress value={50}/>
      </div>
      <div>
        <Textarea placeholder="I am a text"/>
      </div>
      <div>
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default page;