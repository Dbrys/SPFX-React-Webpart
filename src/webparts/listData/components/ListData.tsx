import * as React from 'react';
import styles from './ListData.module.scss';
import { IListDataProps } from './IListDataProps';
import { BrightIdeas } from './ClassBrightIdeas';
import pnp from 'sp-pnp-js'
import * as jquery from 'jquery'; 
import { escape } from '@microsoft/sp-lodash-subset';

export default class ListData extends React.Component<IListDataProps, any> {
  
  
  public constructor(props: IListDataProps, any){
  
   super(props);

   this.state={
       items: []
   }

  }

  public componentDidMount(){

    this.getData();
  }

  private getData()
  {
    pnp.sp.web.lists.getByTitle(`Other List`).items.get().then
    ((response)=>{
      let brightIdeaCollection=response.map(item=>new BrightIdeas(item));
      this.setState({items:brightIdeaCollection});
      }
     )
   }


    //  var reactHandler = this; 
    //     jquery.ajax({
    //      url: `${this.props.siteUrl}/_api/web/lists/getbytitle('TestList')/items`,
    //      type: "GET",
    //      headers:{'Accept': 'applicaiton/json; odata=verbose;'},
    //     success: function(data) {
    //      reactHandler.setState({
    //        listData: data.d.results
    //      });
    //     },
    //     error: function(jqXHR, textStatus, errorThrown){
    //       alert("Inside 1")
    //     }
    //     });
  


  public render(): React.ReactElement<IListDataProps> {
    return (
      <div className={ styles.listData }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <div className={"ms-Grid"}>
              <div className={"ms-Grid-row"}>
              {
                this.state.items.map(function(item, key){
               return (
                <div className={"ms-Grid-col ms-sm6 ms-md6 ms-lg4"}>
                  <div className={styles.contentDiv}>
                 <label className="ms-label ms-font-xxl">{item.Title}</label>
                 <label className="ms-label">{item.Description}</label>
                </div>
                </div>
                )
              })
              
            }
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
