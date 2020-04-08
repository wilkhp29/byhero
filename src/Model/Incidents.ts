import BaseModel from './BaseModel';

interface IIncidents {
  id: string;
  description: string;
  value: number;
  ong_id: string;
}

class Incidents extends BaseModel {
  public static table = 'incidents';
  public id?: number;
  public title: string;
  public description: string;
  public value: number;
  public ong_id: string;

  static async GetById(id: number): Promise<any> {
    return await super.GetById<Incidents>(id.toString());
  }
  static async GetAll(id?: string): Promise<any> {
    return await super.GetAll<Incidents>(id);
  }

  static async Pagenation(page: number): Promise<any> {
    return await super.Pagenation<Incidents>(page);
  }
  static async Delete(id: number): Promise<any> {
    return await super.Delete<Incidents>(id.toString());
  }
  static async Update(Entity: Incidents): Promise<any> {
    return await super.Update<Incidents>(Entity);
  }

  static async Save(obj: Incidents): Promise<any> {
    return await super.Save<Incidents>(obj);
  }


}



export default Incidents;