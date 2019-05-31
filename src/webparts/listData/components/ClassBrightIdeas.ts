import { BrightIdea } from "./BrightIdea"

export class BrightIdeas{
   public Title: string;
   public Description:string;
 

   constructor(item: BrightIdea){
    this.Title = item.Title; 
    this.Description = item.Description; 

   }

}