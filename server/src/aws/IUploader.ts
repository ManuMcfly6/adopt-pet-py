import { ReadStream } from "fs";

export type File = {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream?: ReadStream;
};

export type UploadedFileResponse = {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
};

export interface IUploader {
  singleFileUploadResolver: (
    parent: any,
    { file }: { file: Promise<File> }
  ) => Promise<UploadedFileResponse | null>;
}
