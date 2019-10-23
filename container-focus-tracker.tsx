// export interface IContainerFocusTracker {
//   onBlur?: () => void;
//   onFocus?: () => void;
//   // onKeyedBlur?: () => void;
//   // onKeyedFocus?: () => void;
//   children: React.ReactNode;
//   shouldTrack: boolean;
// }

// export class ContainerFocusTracker extends React.Component<
//   IContainerFocusTracker
// > {
//   private accordionHasFocus: boolean = null;
//   private lastKey: number = null;

//   private node = createRef<HTMLDivElement>();

//   private determineContainerHasFocus = debounce(() => {
//     const hasFocus = this.node.current.contains(document.activeElement);
//     if (hasFocus && !this.accordionHasFocus) {
//       if (this.props.onFocus) {
//         this.props.onFocus(this.lastKey);
//       }
//     }

//     if (
//       !hasFocus &&
//       this.accordionHasFocus &&
//       this.accordionHasFocus !== null
//     ) {
//       if (this.props.onBlur) {
//         this.props.onBlur(this.lastKey);
//       }
//     }

//     this.accordionHasFocus = hasFocus;
//   }, 200);

//   public componentDidMount() {
//     if (this.props.shouldTrack) {
//       window.addEventListener('keydown', this.handleKeyDown);
//       window.addEventListener('focusin', this.handleFocusIn);
//       window.addEventListener('focusout', this.handleFocusOut);
//     }
//   }

//   public componentWillUnmount() {
//     if (this.props.shouldTrack) {
//       window.removeEventListener('keydown', this.handleKeyDown);
//       window.removeEventListener('focusin', this.handleFocusIn);
//       window.removeEventListener('focusout', this.handleFocusOut);
//     }
//   }

//   public handleKeyDown = (ev: KeyboardEvent) => {
//     this.lastKey = ev.keyCode;
//   };

//   public handleFocusIn = (ev: FocusEvent) => {
//     this.determineContainerHasFocus();
//   };

//   public handleFocusOut = (ev: FocusEvent) => {
//     this.determineContainerHasFocus();
//   };

//   public render() {
//     return <div ref={this.node}>{this.props.children}</div>;
//   }
// }
