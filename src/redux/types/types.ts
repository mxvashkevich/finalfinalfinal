import { AxiosResponse } from 'axios';
import { PropsWithChildren } from 'react';
import { Action } from 'redux';
import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

interface IError {
  message: string,
  code: string,
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  imageURL: string | null;
  userId: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IStatePost {
  isLoading: boolean,
  error: IError | null,
  data: IPost[],
}

export interface IAction {
  type: string | null;
  payload: IPost[] | null;
}

export interface INewsProps {
  key: number,
  post: IPost,
}

export interface IPropNews extends PropsWithChildren{
  id: number;
  title: string;
  imageUrl?: string;
  content: string;
  userId: number;
  tags?: string[];
}

export interface IRootState {
  news: IStatePost,
}

export type TWatcher = Generator<ForkEffect>;

export type TGetPostWroker = Generator<CallEffect<AxiosResponse<IPost[]>>> | PutEffect<Action>;
