/// <reference path="typings/main.d.ts" />

import * as React from "react";
import {IStore, IDispatch} from "redux";

declare module ReactRedux {
	
	export class Provider extends React.Component<{store:IStore<any>},{}>{}	

	export interface IMapStateToProps<State, OwnProps, OutProps> {
		(state: State, ownProps?: OwnProps): OutProps;
	}

	export interface IMapDispatchToProps<OwnProps, Dispatchers> {
		(dispatch: IDispatch, ownProps?: OwnProps): Dispatchers;
	}

	export interface IConnectOptions {
		pure?: boolean;
		withRef?: boolean;
	}

	export type ComponentNoState<Props> = React.StatelessComponent<Props> | React.Component<Props, {}>

	export function connect<State, OwnProps, OtherProps, T, U>(
		mapStateToProps: IMapStateToProps<State, OwnProps, T>,
		mapDispatchToProps: IMapDispatchToProps<OwnProps, U>,
		mergeProps: (fromStateMap: T, fromDispatchProps: U, props: OwnProps) => OtherProps,
		options?: IConnectOptions
	): (wrappedComponent: ComponentNoState<OtherProps>)
	=> new() => React.Component<OwnProps & {store: IStore<State>}, IStore<State>>

	export function connect<State, OwnProps, OtherValueProps, OtherCallbackProps>(
		mapStateToProps: IMapStateToProps<State, OwnProps, OtherValueProps>,
		mapDispatchToProps: IMapDispatchToProps<OwnProps, OtherCallbackProps>
	): (wrappedComponent: ComponentNoState<OtherValueProps & OtherCallbackProps>)
	=> new() => React.Component<OwnProps & {store: IStore<State>}, IStore<State>>

	export function connect<State, OwnProps, OtherValueProps>(
		mapStateToProps: IMapStateToProps<State, OwnProps, OtherValueProps>
	): (wrappedComponent: ComponentNoState<OtherValueProps>)
		=> new() => React.Component<OwnProps & {store: IStore<State>}, IStore<State>>

	export function connect<State, OwnProps>(): (wrappedComponent: ComponentNoState<OwnProps>)
		=> new() => React.Component<OwnProps & {store: IStore<State>}, IStore<State>>
}

export = ReactRedux;
