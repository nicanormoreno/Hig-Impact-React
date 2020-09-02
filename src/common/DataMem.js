
let _isDrawerOpen = false;
let _drawerRef = null;
let _modalRef = null;
let _baseModalRef = null;
let _appLoader = null;
let _managementRef = null;

class DataMem {
  static get drawerRef() {
    return _drawerRef;
  }

  static set drawerRef(value) {
    _drawerRef = value;
  }

  static get isDrawerOpen() {
    return _isDrawerOpen;
  }

  static set isDrawerOpen(value) {
    _isDrawerOpen = value;
  }

  static openDrawer() {
    _drawerRef.open();
  }

  static closeDrawer() {
    _drawerRef.close();
  }

  static get modalRef() {
    return _modalRef;
  }

  static set modalRef(value) {
    _modalRef = value;
  }

  static get isModalOpen() {
    return _isModalOpen;
  }

  static set isModalOpen(value) {
    _isModalOpen = value;
  }

  static openModal(props) {
    _modalRef.open(props);
  }

  static closeModal() {
    _modalRef.close();
  }

  static get appLoader() {
    return _appLoader;
  }

  static set appLoader(value) {
    _appLoader = value;
  }

  static openAppLoader() {
    _appLoader.open();
  }

  static closeAppLoader() {
    _appLoader.close();
  }

  static get baseModalRef() {
    return _baseModalRef;
  }

  static set baseModalRef(value) {
    _baseModalRef = value;
  }

  static openBaseModal(children, props) {
    _baseModalRef.open(children, props);
  }

  static closeBaseModal() {
    _baseModalRef.close();
  }

  static get managementRef() {
    return _managementRef;
  }

  static set managementRef(value) {
    _managementRef = value;
  }

  static openManageModal(children, props) {
    _managementRef.open(children, props);
  }

  static closeManageModal() {
    _managementRef.close();
  }
}

module.exports = DataMem;
