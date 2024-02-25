import { CollaboratorTransportDto } from '../dto/CollaboratorTransportDto';
import { CollaboratorTransportVouchersDto } from '../dto/CollaboratorTransportVouchersDto';

export class CollaboratorTransportVouchersMap {

  public static toDto(typeTransportOneWay: any, typeTransportReturn: any): CollaboratorTransportVouchersDto {
    const transportOneWay = [] as any
    if(typeTransportOneWay && typeTransportOneWay.length > 0) {
      for (let index = 0; index < typeTransportOneWay.length; index++) {
        const element = typeTransportOneWay[index].typeTransportOneWay;
        transportOneWay.push(JSON.parse(element as any) as CollaboratorTransportDto[])
      }
    }
    const transportReturn = [] as any
    if(typeTransportReturn && typeTransportReturn.length > 0) {
      for (let index = 0; index < typeTransportReturn.length; index++) {
        const element = typeTransportReturn[index].typeTransportReturn;
        transportReturn.push(JSON.parse(element as any) as CollaboratorTransportDto[])
      }
    }
    
    if(transportOneWay && transportOneWay.length > 0) {
      for (let index = 0; index < transportOneWay.length; index++) {
        const element = transportOneWay[index] as CollaboratorTransportDto;
        if(element.collaboratorTransportCardTypes && element.collaboratorTransportCardTypes.length > 0) {
          const list = []
          for (let x = 0; x < element.collaboratorTransportCardTypes.length; x++) {
            const value = element.collaboratorTransportCardTypes[x];
            list.push(value.transportCardsTypesId)
          }
          element.transportCardType = list
        }
      }
    }
    if(transportReturn && transportReturn.length > 0) {
      for (let index = 0; index < transportReturn.length; index++) {
        const element = transportReturn[index] as CollaboratorTransportDto;
        if(element.collaboratorTransportCardTypes && element.collaboratorTransportCardTypes.length > 0) {
          const list = []
          for (let x = 0; x < element.collaboratorTransportCardTypes.length; x++) {
            const value = element.collaboratorTransportCardTypes[x];
            list.push(value.transportCardsTypesId)
          }
          element.transportCardType = list
        }
      }
    }
   
    return {
      typeTransportOneWay: transportOneWay,
      typeTransportReturn: transportReturn,
    }
  }
}