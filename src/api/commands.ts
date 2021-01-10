import { Command } from "./client";
import { Post } from "./types";

export class Posts extends Command {
    constructor(args: { page: number, per_page: number, include: number[] }) {
        super(["posts", { ...args }]);
    }

    parse(status: number, data: Post[]) {
        if (status !== 200) return data;

        // TODO: Ensure types.

        return data;
    }
} 

export class GetPost extends Command {
    constructor(id: number) {
        super([`posts/${id}`]);
    }

    parse(status: number, data: Post) {
        if (status !== 200) return data;

        // TODO: Ensure types.

        return data;
    }
} 