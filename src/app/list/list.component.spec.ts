import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selectProvider', () => {
    beforeAll(() => {
      component.selectProvider('1');
    });
    it('should put provider in the selected providers list', () => {
      expect(component.selectedProviders.length).toEqual(1);
      expect(component.selectedProviders[0].id).toEqual('1');
    });
    it('should remove the provider from the unselected providers list', () => {
      expect(component.unselectedProviders.length).toEqual(2);
      expect(component.unselectedProviders[0].id).not.toEqual('1');
    });
  });

  describe('removeProvider', () => {
    beforeAll(() => {
      component.removeProvider('1');
    });
    it('should remove the provider from the selected list', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
    it('should put provider in the unselected provider list', () => {
      expect(component.unselectedProviders.length).toEqual(3);
      expect(component.unselectedProviders[2].id).toEqual('1');
    });
  });
});