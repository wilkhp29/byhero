import knex from 'knex';
import { development } from '../../knexfile';

export default class BaseModel {
  private static connection: knex = knex(development);
  public static table: string;

  static async Save<T>(obj: T): Promise<any> {
    try {
      return await this.connection(this.table).insert(obj);
    } catch (error) {
      throw new Error(error.message);
    }

  }

  static async Update<T>(entity: T): Promise<void> {
    try {
      //await this.connection(this.table).update()
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async GetById<T>(id: string): Promise<T> {
    try {
      return await this.connection(this.table).where('id', id).first();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async GetAll<T>(id?: string): Promise<T[]> {
    try {
      if (id) {
        return await this.connection(this.table).where('ong_id', id).select('*');
      }
      return await this.connection(this.table).select('*');
    } catch (error) {
      throw new Error(error.message);
    }
  }


  static async Delete<T>(id: string): Promise<void> {
    try {
      await this.connection(this.table).where('id', id).delete();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async count<T>(): Promise<Number> {
    try {
      const [count] = await this.connection(this.table).count();
      return count;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async Pagenation<T>(page: number): Promise<Array<T>> {
    try {
      return await this.connection(this.table).join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
    } catch (error) {
      throw new Error(error.message);
    }
  }

}



