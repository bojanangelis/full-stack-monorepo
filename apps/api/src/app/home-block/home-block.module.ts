import { Module } from '@nestjs/common';
import { HomeBlockService } from './home-block.service';
import { HomeBlockResolver } from './home-block.resolver';
import { PrismaService } from '@full-stack/api/data-access-db';

@Module({
  providers: [HomeBlockResolver, HomeBlockService, PrismaService]
})
export class HomeBlockModule {}
