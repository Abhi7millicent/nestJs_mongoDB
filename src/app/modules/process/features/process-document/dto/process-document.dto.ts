export class ProcessDocumentDto {
    _id: string;
    title: string;
    desc: string;
    type: string[];
    source: string[];
    number_range: string;
    storage_requirements: string;
    attachments: string[];
    activity_id: string[];
    is_deleted: boolean;
    last_modified_by: string;
}
