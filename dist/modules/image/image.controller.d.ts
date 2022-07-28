/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { GetDirectUploadURLEntity } from 'src/entities/image/getDirectUploadURL.entity';
import { ImageDirectUploadURLEntity } from 'src/entities/image/imageDirectUploadURL.entity';
import { UploadImageRequestEntity } from 'src/entities/image/uploadImageRequestEntity';
import { ImageService } from './image.service';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    getDirectUploadURL(data: GetDirectUploadURLEntity, req: any): Promise<ImageDirectUploadURLEntity>;
    uploadImage(file: Express.Multer.File, data: UploadImageRequestEntity, { user }: {
        user: any;
    }): Promise<import("mongoose").Document<unknown, any, import("./image.model").ImageDocument> & import("./image.model").ImageDocument & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    uploadMultipleImages(files: Express.Multer.File[], data: UploadImageRequestEntity, { user }: {
        user: any;
    }): Promise<(import("mongoose").Document<unknown, any, import("./image.model").ImageDocument> & import("./image.model").ImageDocument & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}