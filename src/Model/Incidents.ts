import BaseModel from './BaseModel';

class Incidents extends BaseModel<Incidents> {
  public static table = 'incidents';
  public id?: number;
  public title: string;
  public description: string;
  public value: number;
  public ong_id: string;


}



export default Incidents;