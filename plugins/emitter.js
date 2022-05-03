import mitt from "mitt";
const emitter = mitt();

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject(emitter);
};
