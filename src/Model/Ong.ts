import BaseModel from './BaseModel';

class Ong extends BaseModel {
  public static table = 'ongs';


  static async GetById(id: string): Promise<any> {
    return await super.GetById<Ong>(id);
  }
  static async GetAll(): Promise<any> {
    return await super.GetAll<Ong>();
  }
  static async Pagenation(page: number): Promise<any> {
    return await super.Pagenation<Ong>(page);
  }
  static async Delete(id: string): Promise<any> {
    return await super.Delete<Ong>(id);
  }
  static async Update(Entity: Ong): Promise<any> {
    return await super.Update<Ong>(Entity);
  }
}

export default Ong;